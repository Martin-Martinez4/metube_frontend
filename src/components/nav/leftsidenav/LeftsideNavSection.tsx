

import "./LeftsideNavSection.scss"

type LeftsideNavEntry = {
    icon: string;
    title: string
}

type LeftsideNavSection = {
    header?: string;
    entries: LeftsideNavEntry[]

};



function LeftsideNavSection({header, entries}: LeftsideNavSection) {
  return (
    <div className="LeftsideNavSection">
        {
            header
            ?
            <h2 className="LeftsideNavSection__header">{header}</h2>
            :
            ""

        }
        <div className="LeftsideNavSection__entries">
            {
                entries.map(entry => {
                    return(
                        <div className="LeftsideNavSection__entry">
                            <img className="LeftsideNavSection__entries--icon" src={`${entry.icon}`} />
                            <span className="LeftsideNavSection__entries--title" >{entry.title}</span>
                        </div>
                    )
                })
            }
        </div>

        <hr />

    </div>
  )
}

export default LeftsideNavSection


