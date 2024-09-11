
def query_users(limit, offset, *, min_followers_count, include_profile):
    print(limit, offset, min_followers_count, include_profile)


query_users(100, 10, min_followers_count=100, include_profile=20)
