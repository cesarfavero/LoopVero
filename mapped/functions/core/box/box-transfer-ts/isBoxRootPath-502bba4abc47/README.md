# `isBoxRootPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-transfer.ts` · [README do módulo](../../../../../modules/core/box/box-transfer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476453-476455](../../../../../../reference/runtime/host-main.cjs#L476453-L476455) | `FunctionDeclaration` | não | `path33` |
| [evaluation:515591-515593](../../../../../../reference/runtime/sand-eval-runner.cjs#L515591-L515593) | `FunctionDeclaration` | não | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476453-476455](../../../../../../reference/runtime/host-main.cjs#L476453-L476455) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515591-515593](../../../../../../reference/runtime/sand-eval-runner.cjs#L515591-L515593) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476453

Chamadas escritas diretamente neste corpo: `BOX_PATH_ROOTS.some`.

SHA-256 do trecho: `a09616a16d5f22f195b2aa7d0b9238ebd61dfafe590fd4ff18bf2fe20ff11831`.

### evaluation:515591

Chamadas escritas diretamente neste corpo: `BOX_PATH_ROOTS.some`.

SHA-256 do trecho: `a09616a16d5f22f195b2aa7d0b9238ebd61dfafe590fd4ff18bf2fe20ff11831`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
