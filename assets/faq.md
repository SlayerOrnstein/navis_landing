# **Frequently Asked Questions**

_Updating as questions arise but for now this get's the hard questions out of
the way_

### **How does the heck is an "Inventoria"?**
[Shangri-La Frontier](https://shangrila-frontier.fandom.com/wiki/Inventoria)

### **How does this work?**

Cephalon Navis uses WFCD API to access a publicly accessible profile endpoint,
which is used to request read-only data. In short this is data that you as a
user can request from DE at any point.

### **Will this get my account banned?**

The short answer, no. The long answer is
[Warframe Third-Party software and you](https://support.warframe.com/hc/en-us/articles/360030014351-Third-Party-Software-and-You).

### **I play on console, how do I get my account ID?**

1. Login to [Warframe](https://www.warframe.com/)
2. Go to [Warframe user data API](https://www.warframe.com/en/api/user-data)
3. Copy and paste the value for `user_id` or `userId` into the text input in
   [Inventoria](https://navis.minilabs.dev/inventoria) page

### **Does this count as a login instance**

Nope not all, since you're not logging in.

### **If this doesn't count as a log in, why do I need to log into warframe.com to get my account ID?**

For console players this is the only way to get your account ID in order to pull
your data. No worries though, this still does not give Cephalon Navis write
access to your account

_For PC players simply use your `EE.log` in the root of
`%LOCALAPPDATA%\Warframe`_

### **What happens if DE removes/restricts access to this profile endpoint?**

Inventoria will be temporarily disabled and reworked to be a manual process

### **Hey, I represent DE and I have some questions. Where can I contact you?**

Just send the cease and desist [here](mailto:devs@warframestat.us)
