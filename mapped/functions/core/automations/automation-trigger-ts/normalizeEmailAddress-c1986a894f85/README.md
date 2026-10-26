# `normalizeEmailAddress`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716259-716262](../../../../../../reference/runtime/host-main.cjs#L716259-L716262) | `FunctionDeclaration` | não | `raw` |
| [evaluation:527942-527945](../../../../../../reference/runtime/sand-eval-runner.cjs#L527942-L527945) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716259-716262](../../../../../../reference/runtime/host-main.cjs#L716259-L716262) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527942-527945](../../../../../../reference/runtime/sand-eval-runner.cjs#L527942-L527945) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:716259

Chamadas escritas diretamente neste corpo: `normalizeScopeToken`, `token.toLowerCase`.

SHA-256 do trecho: `1a08832196f8a6506c9c4840071d7a04dd8385f884faee986bf351ba590242db`.

### evaluation:527942

Chamadas escritas diretamente neste corpo: `normalizeScopeToken`, `token.toLowerCase`.

SHA-256 do trecho: `1a08832196f8a6506c9c4840071d7a04dd8385f884faee986bf351ba590242db`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
