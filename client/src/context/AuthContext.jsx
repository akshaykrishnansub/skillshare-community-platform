import { createContext,useEffect,useState} from "react"

const AuthContext=createContext();

const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    //checking user on loading app
    useEffect(()=>{
        const checkUser=async()=>{
            try{
                const res=await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/me`,{
                  credentials:"include"  
                })
                if(res.ok){
                    const data=await res.json();
                    console.log("ME API RESPONSE:", data);
                    setUser(data.user);
                }
            }catch(err){
                console.error(err);
            }finally{
                setLoading(false);
            }
        }
        checkUser();
    },[]);


    const login=async(email,password)=>{
        try{
            const res=await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/login`,{
                method:"POST",
                headers:{'Content-Type':'application/json'},
                credentials:"include",
                body:JSON.stringify({email,password})
            })
            const data=await res.json();
            if(!res.ok){
                throw new Error(data.error);
            }
            setUser(data.user);
            console.log("Login Response:",data.user)
            return true;
        }catch(err){
            console.error(err.message);
            return false;
        }
    }

    const logout=async()=>{
        try{
            await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/logout`,{
            method:"POST",
            credentials:"include"
        })
        setUser(null);
    }catch(err){
        console.error(err);
    }
}

    return (
        <AuthContext.Provider value={{user,login,loading,logout,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext,AuthProvider}