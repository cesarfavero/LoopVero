# `runStartWindow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-windows.ts` · [README do módulo](../../../../../modules/core/box/box-windows-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554006-554012](../../../../../../reference/runtime/host-main.cjs#L554006-L554012) | `FunctionDeclaration` | sim | `ctx, accessor, windowIndex, ownerToken, opts = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554006-554012](../../../../../../reference/runtime/host-main.cjs#L554006-L554012) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:554006

Chamadas escritas diretamente neste corpo: `runWindowScript`.

SHA-256 do trecho: `12f356da6b5d90e43ad872ce3728423f1df69c43c035f60df1ac99e4b337ada2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
