# `scanSpoken`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/virtual-mounts/transcripts.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/transcripts-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766140-766165](../../../../../../reference/runtime/host-main.cjs#L766140-L766165) | `FunctionDeclaration` | sim | `source` |
| [evaluation:559504-559529](../../../../../../reference/runtime/sand-eval-runner.cjs#L559504-L559529) | `FunctionDeclaration` | sim | `source` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766140-766165](../../../../../../reference/runtime/host-main.cjs#L766140-L766165) | 3 | 1 | 1 | 2 | 0 | 0 |
| [evaluation:559504-559529](../../../../../../reference/runtime/sand-eval-runner.cjs#L559504-L559529) | 3 | 1 | 1 | 2 | 0 | 0 |

### host:766140

Chamadas escritas diretamente neste corpo: `entries.push`, `source.readMessages`.

Alvos de atribuição ou incremento: `before`.

SHA-256 do trecho: `53aa9d324c95af3d4f0abc26e1233a6a8525fa5e68f7f07379cf9115eab51472`.

### evaluation:559504

Chamadas escritas diretamente neste corpo: `entries.push`, `source.readMessages`.

Alvos de atribuição ou incremento: `before`.

SHA-256 do trecho: `53aa9d324c95af3d4f0abc26e1233a6a8525fa5e68f7f07379cf9115eab51472`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
