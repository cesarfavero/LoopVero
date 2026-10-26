# `jsonObjectFrom`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/struct-from-record.ts` · [README do módulo](../../../../../modules/core/runner/struct-from-record-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699140-699147](../../../../../../reference/runtime/host-main.cjs#L699140-L699147) | `FunctionDeclaration` | não | `record3, path33` |
| [evaluation:512971-512978](../../../../../../reference/runtime/sand-eval-runner.cjs#L512971-L512978) | `FunctionDeclaration` | não | `record4, path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699140-699147](../../../../../../reference/runtime/host-main.cjs#L699140-L699147) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:512971-512978](../../../../../../reference/runtime/sand-eval-runner.cjs#L512971-L512978) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:699140

Chamadas escritas diretamente neste corpo: `Object.entries`, `jsonValueFrom`.

Alvos de atribuição ou incremento: `result[computed]`.

SHA-256 do trecho: `f6cd387229dab6965207a76ee0abf2303fb833c08226561842a8ab634adc05ac`.

### evaluation:512971

Chamadas escritas diretamente neste corpo: `Object.entries`, `jsonValueFrom`.

Alvos de atribuição ou incremento: `result[computed]`.

SHA-256 do trecho: `7a1e355cb8314b2f46673895038f144a56b8b7c8cfab95eb3a2d2d9eba160895`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
