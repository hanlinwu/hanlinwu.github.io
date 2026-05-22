#!/usr/bin/env python3

import argparse
import json
import os
import sys

from tencentcloud.cdn.v20180606 import cdn_client, models
from tencentcloud.common import credential
from tencentcloud.common.exception.tencent_cloud_sdk_exception import TencentCloudSDKException
from tencentcloud.common.profile.client_profile import ClientProfile
from tencentcloud.common.profile.http_profile import HttpProfile


def parse_args():
    parser = argparse.ArgumentParser(description="Purge Tencent Cloud CDN path cache.")
    parser.add_argument("paths", nargs="+", help="CDN paths to purge, e.g. https://hlwu.ac.cn/")
    parser.add_argument(
        "--flush-type",
        default="flush",
        choices=["flush", "delete"],
        help="Use 'flush' for changed resources or 'delete' to purge all cached resources.",
    )
    parser.add_argument(
        "--endpoint",
        default=os.environ.get("TENCENT_CDN_ENDPOINT", "cdn.tencentcloudapi.com"),
        help="Tencent Cloud CDN API endpoint.",
    )
    return parser.parse_args()


def main():
    args = parse_args()
    secret_id = os.environ.get("TENCENTCLOUD_SECRET_ID")
    secret_key = os.environ.get("TENCENTCLOUD_SECRET_KEY")

    if not secret_id or not secret_key:
        print("Skipping CDN purge: TENCENTCLOUD_SECRET_ID or TENCENTCLOUD_SECRET_KEY is not set.")
        return 0

    try:
        cred = credential.Credential(secret_id, secret_key)
        http_profile = HttpProfile()
        http_profile.endpoint = args.endpoint

        client_profile = ClientProfile()
        client_profile.httpProfile = http_profile
        client = cdn_client.CdnClient(cred, "", client_profile)

        req = models.PurgePathCacheRequest()
        req.from_json_string(json.dumps({"Paths": args.paths, "FlushType": args.flush_type}))
        resp = client.PurgePathCache(req)
        print(resp.to_json_string())
        return 0
    except TencentCloudSDKException as err:
        print(f"Tencent Cloud CDN purge failed: {err}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
