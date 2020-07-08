import React, { useEffect } from "react";

export default function Checkout(props) {
    useEffect(() => {
        try {
            document.getElementById("cart").style.display = "none";
        } catch (e) {}
        return () => {
            try {
                document.getElementById("cart").style.display = "block";
            } catch (e) {}
        };
    }, []);

    return <div>Ok</div>;
}
