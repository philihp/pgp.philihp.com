const raw = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd" >
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>SKS OpenPGP Keyserver statistics&nbsp;|&nbsp;Taken at 2020-09-27 03:00:39 UTC</title>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<style type="text/css">
/*<![CDATA[*/
 .uid { color: green; text-decoration: underline; }
 .warn { color: red; font-weight: bold; }
/*]]>*/
</style></head><body><h1>SKS OpenPGP Keyserver statistics<br />Taken at 2020-09-27 03:00:39 UTC</h1><h2>Settings</h2>
     <table summary="Keyserver Settings">
     <tr><td>Hostname:</td><td>pgp.philihp.com</td></tr>
     <tr><td>Nodename:</td><td>pgp.philihp.com</td></tr>
     <tr><td>Version:</td><td>1.1.6</td></tr>
     <tr><td>Server contact:</td><td>philihp@gmail.com</td></tr>
     <tr><td>HTTP port:</td><td>80</td></tr>
     <tr><td>Recon port:</td><td>80</td></tr>
     <tr><td>Debug level:</td><td>1</td></tr>
</table>


<table summary="Keyserver Peers" width="100%">
<tr valign="top"><td>
<h2>Gossip Peers</h2>
<table summary="Gossip Peers">
</table>
</td><td>
<h2>Outgoing Mailsync Peers</h2>
<table summary="Mailsync Peers">
</table>
</td></tr></table>
<h2>Statistics</h2><p>Total number of keys: 5361575</p>
<h3>Daily Histogram</h3>
<table summary="Statistics" border="1">
<tr><td>Time</td><td>New Keys</td><td>Updated Keys</td></tr>
</table>
<h3>Hourly Histogram</h3>
<table summary="Statistics" border="1">
<tr><td>Time</td><td>New Keys</td><td>Updated Keys</td></tr>
</table>
</body></html>
`

export default (_req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(raw)
}
