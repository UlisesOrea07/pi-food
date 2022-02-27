import React from "react";
import UploadImage from "../UploadImage/UploadImage";
const Form = () => {
    return (

        <div>
            <form>
                <div>
                    <label>
                        Title:
                    </label>
                </div>
                <div>
                    <label>
                        Image:
                    </label>
                    {/* <UploadImage /> */}
                </div>
                <div>
                    <label>
                        Healt:
                    </label>

                </div>
                <div>
                    <label>
                        Score:
                    </label>
                </div>
                <div>
                    <label>
                        Summary:
                    </label>
                </div>
                <div>
                    <label>
                        Diets:
                    </label>
                </div>

                <button>Agregar</button>
                <button>Cancelar</button>
            </form>
        </div>
    )
}

export default Form;