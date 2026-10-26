# `compiledSpelling`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/email/email-display-name.ts` · [README do módulo](../../../../../modules/core/email/email-display-name-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715765-715784](../../../../../../reference/runtime/host-main.cjs#L715765-L715784) | `FunctionDeclaration` | não | `letters` |
| [evaluation:527434-527453](../../../../../../reference/runtime/sand-eval-runner.cjs#L527434-L527453) | `FunctionDeclaration` | não | `letters` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715765-715784](../../../../../../reference/runtime/host-main.cjs#L715765-L715784) | 3 | 3 | 0 | 1 | 1 | 0 |
| [evaluation:527434-527453](../../../../../../reference/runtime/sand-eval-runner.cjs#L527434-L527453) | 3 | 3 | 0 | 1 | 1 | 0 |

### host:715765

Chamadas escritas diretamente neste corpo: `Object.keys`, `STANDS_FOR[computed].includes`, `new Error`, `new Int32Array`, `unit.charCodeAt`.

Alvos de atribuição ou incremento: `j2`, `lettersByUnit[computed]`, `lettersEnteredOnRepeat`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `b356d760fb5e013cf560ad403fae8882569e6857850a78c87860888e2af7a556`.

### evaluation:527434

Chamadas escritas diretamente neste corpo: `Object.keys`, `STANDS_FOR[computed].includes`, `new Error`, `new Int32Array`, `unit.charCodeAt`.

Alvos de atribuição ou incremento: `j2`, `lettersByUnit[computed]`, `lettersEnteredOnRepeat`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `b356d760fb5e013cf560ad403fae8882569e6857850a78c87860888e2af7a556`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
