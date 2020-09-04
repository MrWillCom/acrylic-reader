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
                    <small><Link onClick={() => window.utils.openExternal("https://github.com/yang991178/fluent-reader")}>{intl.get("settings.upstream")}</Link></small>
                    <small><Link onClick={() => window.utils.openExternal("https://github.com/yang991178/fluent-reader/blob/master/LICENSE")}>{intl.get("settings.licenseOfUpstream")}</Link></small>
                    <small><Link onClick={() => window.utils.openExternal("https://github.com/MrWillCom/acrylic-reader/issues")}>{intl.get("settings.feedback")}</Link></small>
                </Stack>
            </Stack>
            <h4 className="settings-about-license-heading">{intl.get("settings.licenseOfUpstream")}</h4>
            <p className="settings-about-license-content">BSD 3-Clause License<br /><br />Copyright (c) 2020, Haoyuan Liu<br />All rights reserved.<br /><br />Redistribution and use in source and binary forms, with or without<br />modification, are permitted provided that the following conditions are met:<br /><br />1. Redistributions of source code must retain the above copyright notice, this<br />   list of conditions and the following disclaimer.<br /><br />2. Redistributions in binary form must reproduce the above copyright notice,<br />   this list of conditions and the following disclaimer in the documentation<br />   and/or other materials provided with the distribution.<br /><br />3. Neither the name of the copyright holder nor the names of its<br />   contributors may be used to endorse or promote products derived from<br />   this software without specific prior written permission.<br /><br />THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"<br />AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE<br />IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE<br />DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE<br />FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL<br />DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR<br />SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER<br />CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,<br />OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE<br />OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.<br /></p>
        </div>
    )
}

export default AboutTab