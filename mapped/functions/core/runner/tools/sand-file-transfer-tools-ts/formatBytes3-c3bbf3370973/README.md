# `formatBytes3`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-file-transfer-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-file-transfer-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777609-777619](../../../../../../../reference/runtime/host-main.cjs#L777609-L777619) | `FunctionDeclaration` | não | `bytes` |
| [evaluation:577304-577314](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577304-L577314) | `FunctionDeclaration` | não | `bytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777609-777619](../../../../../../../reference/runtime/host-main.cjs#L777609-L777619) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:577304-577314](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577304-L577314) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:777609

Chamadas escritas diretamente neste corpo: `Number.isInteger`, `value.toFixed`.

Alvos de atribuição ou incremento: `unitIndex`, `value`.

SHA-256 do trecho: `d06305fb65e1c7359a45b7a55fc29a3fb4b372a1f2ee12af9252a86f0bf5adbc`.

### evaluation:577304

Chamadas escritas diretamente neste corpo: `Number.isInteger`, `value.toFixed`.

Alvos de atribuição ou incremento: `unitIndex`, `value`.

SHA-256 do trecho: `d06305fb65e1c7359a45b7a55fc29a3fb4b372a1f2ee12af9252a86f0bf5adbc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
