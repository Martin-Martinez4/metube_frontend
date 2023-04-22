

import { useNavigate } from "react-router-dom";
import "./LeftsideNavSection.scss"

type LeftsideNavEntry = {
    icon: string,
    title: string,
    link?: string,
}

type LeftsideNavSection = {
    header?: string;
    entries: LeftsideNavEntry[],
    iconClasses?: string

};



function LeftsideNavSection({ header, entries, iconClasses }: LeftsideNavSection) {

    const navigate = useNavigate();

    return (
        <div className="LeftsideNavSection">
            {
                header
                    ?
                    <h2 className="LeftsideNavSection__header hiddenAt920px">{header}</h2>
                    :
                    ""

            }
            <div className="LeftsideNavSection__entries">
                {
                    entries.map(entry => {
                        return (
                            <div className="LeftsideNavSection__entry" onClick={() => {
                                entry.link
                                    ?
                                    navigate(`${entry.link}`)
                                    :
                                    ""
                            }}>
                                <img className={`LeftsideNavSection__entries--icon pointer ${iconClasses ? iconClasses : ""}`} src={`${entry.icon}`} />
                                <span className="LeftsideNavSection__entries--title pointer hiddenAt920px" >{entry.title}</span>
                            </div>
                        )
                    })
                }
            </div>

            <hr className="LeftsideNavSection__linebreak margint4" />

        </div>
    )
}

export default LeftsideNavSection


