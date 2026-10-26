# `isGithubEventKind`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716003-716005](../../../../../../reference/runtime/host-main.cjs#L716003-L716005) | `FunctionDeclaration` | não | `value` |
| [evaluation:527686-527688](../../../../../../reference/runtime/sand-eval-runner.cjs#L527686-L527688) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716003-716005](../../../../../../reference/runtime/host-main.cjs#L716003-L716005) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527686-527688](../../../../../../reference/runtime/sand-eval-runner.cjs#L527686-L527688) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:716003

Chamadas escritas diretamente neste corpo: `GITHUB_EVENT_KINDS.some`.

SHA-256 do trecho: `d35ff9540b3bf401abaf885add3f88ec3ffb42ccd7ebca0d8f6c048d100e14ac`.

### evaluation:527686

Chamadas escritas diretamente neste corpo: `GITHUB_EVENT_KINDS.some`.

SHA-256 do trecho: `d35ff9540b3bf401abaf885add3f88ec3ffb42ccd7ebca0d8f6c048d100e14ac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
