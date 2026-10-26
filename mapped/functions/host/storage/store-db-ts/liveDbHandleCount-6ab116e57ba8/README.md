# `liveDbHandleCount`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/storage/store-db.ts` · [README do módulo](../../../../../modules/host/storage/store-db-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:478880-478882](../../../../../../reference/runtime/host-main.cjs#L478880-L478882) | `FunctionDeclaration` | não | `resolvedDbPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478880-478882](../../../../../../reference/runtime/host-main.cjs#L478880-L478882) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:478880

Chamadas escritas diretamente neste corpo: `liveDbHandlesByPath.get`.

SHA-256 do trecho: `c20c3859a9b5d3640fa79913063a224156f3e849b33ecedbe16035c5f24ec277`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
