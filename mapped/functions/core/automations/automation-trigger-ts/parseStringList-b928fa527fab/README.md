# `parseStringList`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716014-716023](../../../../../../reference/runtime/host-main.cjs#L716014-L716023) | `FunctionDeclaration` | não | `raw` |
| [evaluation:527697-527706](../../../../../../reference/runtime/sand-eval-runner.cjs#L527697-L527706) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716014-716023](../../../../../../reference/runtime/host-main.cjs#L716014-L716023) | 3 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:527697-527706](../../../../../../reference/runtime/sand-eval-runner.cjs#L527697-L527706) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:716014

Chamadas escritas diretamente neste corpo: `Array.isArray`, `normalizeScopeToken`, `values.includes`, `values.push`.

SHA-256 do trecho: `f2c4131a4318a7f11e337348a236c7cf373cc5b925819a49a63573690408ac79`.

### evaluation:527697

Chamadas escritas diretamente neste corpo: `Array.isArray`, `normalizeScopeToken`, `values.includes`, `values.push`.

SHA-256 do trecho: `f2c4131a4318a7f11e337348a236c7cf373cc5b925819a49a63573690408ac79`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
