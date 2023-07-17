import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "linkyou-94b1e";
const FB_CLIENT_EMAIL = "firebase-adminsdk-vxsh2@linkyou-94b1e.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\n                MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQClYgw3eHxFRCvV\n                oSAHsjGfPKQfixJl5zonB8dAkHEoCr42SfCw9urxg3/glsi5dsLAvuDbfe6hVWJK\n                9DsUYWc+ol8EpUHhrZzxPe+vLL79cF4qyesiF0kwR2XqRVsUySDBSdZcP3tt4xQ0\n                7Nispgu381e0RH5jQ+vy4hrHkOhcrtXm3MKNEeWsMG1grZZqlPc95MhTqtcseWsv\n                skNCHHgHgEzXJLQZEioa2cXL1zT6s4dijandlDLXmbAHR6aFfacrbuKUYIZFZqrL\n                H/nNxyQt8T7TqhqNgdNfYPFz4j/c8jJn6cMjLeuO+lV1BISPN5YLABJFaDDni99D\n                dNr39zlrAgMBAAECggEAFJlw0hv0xp/mIdbO6YZ9fcsM2kz1PrIdYS0r2VPkdEta\n                Q+LT0wb+XpS1geDmIYu0WFOuKEi4R2oeMx3WmgRD2t5YnXiECzsXuEixqQ0WwPSV\n                FhlOa1GhMR1DiXmYDa+7n7e1tonFsvs80hbKKj8IaKIrw21gnLaiFf+pvD/FYX3G\n                KzjBVrhS7UVnKtbiaz8BH4QwTRaXtwTAyCWkP+Yczmr2Zujo5iEjTFWdeBJCZ5YD\n                WYOymeDriZh++CmUdxO6odwzokJY7bY5NWUnwNdquGTWWeGSbadAPOcm6wgexeOU\n                N+DnJpAFcLwlCyPdhGxlVTlYzzeQyvvTmnBpyfjxeQKBgQDSjSMu/J8vBodvrzvl\n                k0bJGF2Rd7xGOs7N6ssZr1gWiCpaCfD/ujC1hnpbjMrJK7VURoywXo2Yu69DhWHV\n                3h3kAdiMa2R3pmPq9+1U6nyvwy/NrTBJeEWyWXah6zmZTFHIVMLg712K4ig7VirZ\n                aIgqC0fsXMuK3NqqLf4M83hGJwKBgQDJFPPb5jMf2DwvlLc9zgJefSwlyj9jw9VV\n                lLwfZTg00ptDDvTM5MqEXuenSN9/SeI6Rkbn8oMXmYP7JeYL18IOkTWSg/6vgFW7\n                qnrVHwc7ADxyqhm3hENQZ5+9Yr37dX0BIGHndNnxUdr78TkMVHGV6L3i11H6SqY2\n                bI2Y2TnhHQKBgQDF3HIqzqV82KLf1onwFPXZNnd/o0ifqtX69mFEUt3x1qYOFPeQ\n                KdVqUOSdMfLDF7sAZogBmelwlTd/uVGWXHQ0d3ObibRRKGEPR0uVmAHyXfeHTfBp\n                qoe8sYvlX5qyL+FO5DB6lxaN1DfAgxojUrNa510AhreUWDV45V2vqADn0wKBgQC0\n                xsCB9tAJlhZt1G51AwuANVqGUvBwWbQmr4P9WbuRSbJKNF0DA8HKBaSP8WT1A9B+\n                AYZnqtAOXHaaSLUr+no9LHEUWtSSpXbuM9MgXTfb5Fdz4tch9Ker1q12zxnrwvFy\n                HNHIC3aQjL2p+XEHU7eWRVrJYDkUIx6RGUCnpMtzRQKBgG/lX/e9Yc52PAl2PBnl\n                NWw1CS0eYhCMtEWAX0f6EMov9T6eiqJQeetCwq2FGZBPRPutDaKICVS3cMJOi0q6\n                YnJIoODq0pKRE2Cg7J0hrQbJtsPpxBWXeuUvRSHD4YXyG74n/E1xvCzbU/tD3iIM\n                2peZ7qyykpQFz9Eca+QUYTj5\n                -----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
