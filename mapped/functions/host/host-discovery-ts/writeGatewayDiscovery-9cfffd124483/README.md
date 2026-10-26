# `writeGatewayDiscovery`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-discovery.ts` · [README do módulo](../../../../modules/host/host-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:493995-494014](../../../../../reference/runtime/host-main.cjs#L493995-L494014) | `FunctionDeclaration` | sim | `info2, path33 = getGatewayDiscoveryPath(), fs33 = import_node_fs34.promises` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493995-494014](../../../../../reference/runtime/host-main.cjs#L493995-L494014) | 4 | 0 | 3 | 1 | 1 | 2 |

### host:493995

Chamadas escritas diretamente neste corpo: `.isSymbolicLink`, `JSON.stringify`, `fs33.lstat`, `fs33.unlink`, `isMissingPathError`, `reportFallback`, `writeFileAtomic`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `a8aac69f7d850251d7acd354086748547c6d100512b55f2e397ed9576d5c303a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
