# `writeContentAddressedFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/attachments-service.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:498577-498585](../../../../../../../reference/runtime/host-main.cjs#L498577-L498585) | `FunctionDeclaration` | sim | `dir, targetPath, buffer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498577-498585](../../../../../../../reference/runtime/host-main.cjs#L498577-L498585) | 2 | 0 | 2 | 1 | 1 | 1 |

### host:498577

Chamadas escritas diretamente neste corpo: `.isFile`, `ensureSandDataDirSync`, `findSystemErrno`, `import_node_fs43.promises.lstat`, `writeSandDataFile`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `0c6ec339c54f957175f2b3b91c34b535daca458541d05cfb33dff892d327df5b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
