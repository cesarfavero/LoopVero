# `githubEventPhrase`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automations.ts` · [README do módulo](../../../../../modules/shared/automations/automations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485550-485552](../../../../../../reference/runtime/host-main.cjs#L485550-L485552) | `FunctionDeclaration` | não | `kind` |
| [evaluation:475280-475282](../../../../../../reference/runtime/sand-eval-runner.cjs#L475280-L475282) | `FunctionDeclaration` | não | `kind` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485550-485552](../../../../../../reference/runtime/host-main.cjs#L485550-L485552) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475280-475282](../../../../../../reference/runtime/sand-eval-runner.cjs#L475280-L475282) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485550

Chamadas escritas diretamente neste corpo: `GITHUB_EVENT_KINDS.indexOf`.

SHA-256 do trecho: `eab117711de326505c401708ee5b1aaf81b2f80b8455de535258e58b96766448`.

### evaluation:475280

Chamadas escritas diretamente neste corpo: `GITHUB_EVENT_KINDS.indexOf`.

SHA-256 do trecho: `eab117711de326505c401708ee5b1aaf81b2f80b8455de535258e58b96766448`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
