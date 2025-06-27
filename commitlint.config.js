export default {
	extends: ['@commitlint/config-conventional'],
	// ignore commits from dependabot
	ignores: [
		(commit) =>
			(commit.startsWith('chore(deps)') || commit.startsWith('chore(deps-dev)')) && commit.includes('dependabot')
	]
};
