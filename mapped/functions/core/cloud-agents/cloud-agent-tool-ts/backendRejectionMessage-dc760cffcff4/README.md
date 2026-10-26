# `backendRejectionMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-tool.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:567968-567997](../../../../../../reference/runtime/sand-eval-runner.cjs#L567968-L567997) | `FunctionDeclaration` | não | `error63, repoUrl, readOriginPrIdentityHosts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567968-567997](../../../../../../reference/runtime/sand-eval-runner.cjs#L567968-L567997) | 10 | 0 | 0 | 9 | 0 | 0 |

### evaluation:567968

Chamadas escritas diretamente neste corpo: `.find`, `.map`, `/please reconnect (github|gitlab|bitbucket|azure)/i.test`, `/repositor/i.test`, `detectScmProviderForRepoUrl`, `error63.findDetails`, `error63.rawMessage.trim`, `scmProviderDisplayName`.

SHA-256 do trecho: `5afd32791c638294827a8e6f6ea0482e8530b1eebcf7508bc0980d5f47bbd605`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
