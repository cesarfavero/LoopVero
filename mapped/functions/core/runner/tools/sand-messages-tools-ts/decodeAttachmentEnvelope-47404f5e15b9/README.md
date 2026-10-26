# `decodeAttachmentEnvelope`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-messages-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777925-777941](../../../../../../../reference/runtime/host-main.cjs#L777925-L777941) | `FunctionDeclaration` | não | `raw` |
| [evaluation:577660-577676](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577660-L577676) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777925-777941](../../../../../../../reference/runtime/host-main.cjs#L777925-L777941) | 6 | 0 | 0 | 4 | 1 | 1 |
| [evaluation:577660-577676](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577660-L577676) | 6 | 0 | 0 | 4 | 1 | 1 |

### host:777925

Chamadas escritas diretamente neste corpo: `JSON.parse`.

Alvos de atribuição ou incremento: `parsed2`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `040142c1248f23762f4ea5c96e36ea303f9ef86bf389506b4d8ec6f89d04c8a7`.

### evaluation:577660

Chamadas escritas diretamente neste corpo: `JSON.parse`.

Alvos de atribuição ou incremento: `parsed`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `bc8aba1c77ee308d9ebf2f7d06dceeeea44bbbd1d0d2a6f7608465e8c8e21257`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
