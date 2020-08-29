import * as React from "react"
import intl from "react-intl-universal"
import { Stack, Link } from "@fluentui/react"

class AboutTab extends React.Component {
    render = () => (
        <div className="tab-body">
            <Stack className="settings-about" horizontalAlign="center">
                <img src="icons/logo.svg" style={{width: 120, height: 120}} />
                <h3 style={{fontWeight: 600}}>Acrylic Reader</h3>
                <small>{intl.get("settings.version")} {window.utils.getVersion()}</small>
                <p className="settings-hint">{intl.get("settings.thisAppIsFullyBasedOn")} <Link onClick={() => window.utils.openExternal("https://github.com/yang991178/fluent-reader")}>yang991178/fluent-reader</Link></p>
                <Stack horizontal horizontalAlign="center" tokens={{childrenGap: 12}}>
                    <small><Link onClick={() => window.utils.openExternal("https://github.com/MrWillCom/acrylic-reader/wiki/Support#keyboard-shortcuts")}>{intl.get("settings.shortcuts")}</Link></small>
                    <small><Link onClick={() => window.utils.openExternal("https://github.com/MrWillCom/acrylic-reader")}>{intl.get("settings.openSource")}</Link></small>
                    <small><Link onClick={() => window.utils.openExternal("https://github.com/yang991178/fluent-reader")}>{intl.get("settings.openSource")}</Link></small>
                    <small><Link onClick={() => window.utils.openExternal("https://github.com/MrWillCom/acrylic-reader/issues")}>{intl.get("settings.feedback")}</Link></small>
                </Stack>
            </Stack>
        </div>
    )
}

export default AboutTab