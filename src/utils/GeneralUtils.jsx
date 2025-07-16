import Swal from "sweetalert2";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

class GeneralUtils {
    static useToast() {
        return Swal.mixin({
            buttonsStyling: false,
            customClass: {
                title: 'font-semibold', // Custom title style
                htmlContainer: 'text-neutral', // Custom content style
                confirmButton: 'btn btn-success m-1',
                cancelButton: 'btn btn-error m-1',
                input: 'form-control'
            },
        });
    }
    
    static getCurrentTheme() {
        const themeSwitcher = document.querySelector(".theme-controller");
        
        if (themeSwitcher.value === 'light' && themeSwitcher.checked || themeSwitcher.value === 'dark' && !themeSwitcher.checked) {
            return "light";
        }
        
        return "dark";
    }
}

export default GeneralUtils;