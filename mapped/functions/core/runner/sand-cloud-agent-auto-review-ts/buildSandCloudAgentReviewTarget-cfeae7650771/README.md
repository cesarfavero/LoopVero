# `buildSandCloudAgentReviewTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-cloud-agent-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-cloud-agent-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775742-775820](../../../../../../reference/runtime/host-main.cjs#L775742-L775820) | `FunctionDeclaration` | não | `args, attachments = {}` |
| [evaluation:575385-575463](../../../../../../reference/runtime/sand-eval-runner.cjs#L575385-L575463) | `FunctionDeclaration` | não | `args, attachments = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775742-775820](../../../../../../reference/runtime/host-main.cjs#L775742-L775820) | 27 | 0 | 0 | 11 | 0 | 0 |
| [evaluation:575385-575463](../../../../../../reference/runtime/sand-eval-runner.cjs#L575385-L575463) | 27 | 0 | 0 | 11 | 0 | 0 |

### host:775742

Chamadas escritas diretamente neste corpo: `args.agent_id.trim`, `args.custom_mode.trim`, `args.prompt.trim`, `args.repo.trim`, `args.repo_name.trim`, `args.repo_url.trim`, `args.title.trim`, `isSandCloudAgentAutoReviewAction`, `normalizeCloudAgentSecretNames`, `normalizedPublishFolder`.

SHA-256 do trecho: `d67355d3155801b6b81bf12473b549a5925bfe43cc9a318dc039888fba8f76b8`.

### evaluation:575385

Chamadas escritas diretamente neste corpo: `args.agent_id.trim`, `args.custom_mode.trim`, `args.prompt.trim`, `args.repo.trim`, `args.repo_name.trim`, `args.repo_url.trim`, `args.title.trim`, `isSandCloudAgentAutoReviewAction`, `normalizeCloudAgentSecretNames`, `normalizedPublishFolder`.

SHA-256 do trecho: `d67355d3155801b6b81bf12473b549a5925bfe43cc9a318dc039888fba8f76b8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
