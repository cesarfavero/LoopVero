# `isHttpUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/ports/app-home.ts` · [README do módulo](../../../../../modules/core/ports/app-home-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770963-770971](../../../../../../reference/runtime/host-main.cjs#L770963-L770971) | `FunctionDeclaration` | não | `value` |
| [evaluation:570069-570077](../../../../../../reference/runtime/sand-eval-runner.cjs#L570069-L570077) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770963-770971](../../../../../../reference/runtime/host-main.cjs#L770963-L770971) | 0 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:570069-570077](../../../../../../reference/runtime/sand-eval-runner.cjs#L570069-L570077) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:770963

Chamadas escritas diretamente neste corpo: `new URL`.

Alvos de atribuição ou incremento: `parsed2`.

SHA-256 do trecho: `baabf6c83f919cc21d9b415a5034c9782ddf67295c7636010f423008053782e1`.

### evaluation:570069

Chamadas escritas diretamente neste corpo: `new URL`.

Alvos de atribuição ou incremento: `parsed`.

SHA-256 do trecho: `4e1c9b7eba5ad12e156f92667a4f52f1159c612404d198cc55de97ed509d61c6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
