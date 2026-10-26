# `parseCiBranch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716093-716096](../../../../../../reference/runtime/host-main.cjs#L716093-L716096) | `FunctionDeclaration` | não | `raw` |
| [evaluation:527776-527779](../../../../../../reference/runtime/sand-eval-runner.cjs#L527776-L527779) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716093-716096](../../../../../../reference/runtime/host-main.cjs#L716093-L716096) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527776-527779](../../../../../../reference/runtime/sand-eval-runner.cjs#L527776-L527779) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:716093

Chamadas escritas diretamente neste corpo: `isValidGitBranch`, `normalizeScopeToken`.

SHA-256 do trecho: `0aac30cf8fc54b4b2db39f7a262078d6ac09fbdd093b036cbdb043c66c4ddf8c`.

### evaluation:527776

Chamadas escritas diretamente neste corpo: `isValidGitBranch`, `normalizeScopeToken`.

SHA-256 do trecho: `0aac30cf8fc54b4b2db39f7a262078d6ac09fbdd093b036cbdb043c66c4ddf8c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
