(function(n,i,v,r,s,c,x,z){x=window.AwsRumClient={q:[],n:n,i:i,v:v,r:r,c:c};window[n]=function(c,p){x.q.push({c:c,p:p});};z=document.createElement('script');z.async=true;z.src=s;document.head.insertBefore(z,document.head.getElementsByTagName('script')[0]);})(
  'cwr',
  '28248fe4-6857-4a9b-9944-690a65f82d2f',
  '1.0.0',
  'us-east-1',
  'https://client.rum.us-east-1.amazonaws.com/1.19.0/cwr.js',
  {
    sessionSampleRate: 1,
    identityPoolId: "us-east-1:f65d1519-3f85-49bc-8cc0-2153acdf0185",
    endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
    telemetries: ["performance","errors","http"],
    allowCookies: true,
    enableXRay: false
  }
);