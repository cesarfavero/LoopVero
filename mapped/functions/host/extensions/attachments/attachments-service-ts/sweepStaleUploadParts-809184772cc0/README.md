# `sweepStaleUploadParts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/attachments-service.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:498637-498648](../../../../../../../reference/runtime/host-main.cjs#L498637-L498648) | `FunctionDeclaration` | sim | `partsDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498637-498648](../../../../../../../reference/runtime/host-main.cjs#L498637-L498648) | 2 | 1 | 2 | 0 | 1 | 1 |

### host:498637

Chamadas escritas diretamente neste corpo: `Date.now`, `findSystemErrno`, `import_node_fs43.promises.lstat`, `import_node_fs43.promises.readdir`, `removeSandDataFileSync`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `422e4f3ad567e831b05bcb95d31d81c6dc5d6509f5eb1fc97b1c755d00ca3604`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
