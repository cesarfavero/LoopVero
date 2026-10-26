# `shouldRerenderUserInfoForRequestContextRecovery`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639830-639835](../../../../../../reference/runtime/host-main.cjs#L639830-L639835) | `FunctionDeclaration` | não | `params` |
| [evaluation:430444-430449](../../../../../../reference/runtime/sand-eval-runner.cjs#L430444-L430449) | `FunctionDeclaration` | não | `params` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639830-639835](../../../../../../reference/runtime/host-main.cjs#L639830-L639835) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:430444-430449](../../../../../../reference/runtime/sand-eval-runner.cjs#L430444-L430449) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:639830

Chamadas escritas diretamente neste corpo: `isRequestContextComplete`, `requestContextCompletenessIsStrictlyMoreComplete`.

SHA-256 do trecho: `daa54aae4529030e797d620ccdf96807878b295d65ab15c99049757fe27c8f18`.

### evaluation:430444

Chamadas escritas diretamente neste corpo: `isRequestContextComplete`, `requestContextCompletenessIsStrictlyMoreComplete`.

SHA-256 do trecho: `daa54aae4529030e797d620ccdf96807878b295d65ab15c99049757fe27c8f18`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
