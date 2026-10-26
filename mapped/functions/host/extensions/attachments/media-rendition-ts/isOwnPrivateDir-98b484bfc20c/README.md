# `isOwnPrivateDir`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/media-rendition.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/media-rendition-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497935-497945](../../../../../../../reference/runtime/host-main.cjs#L497935-L497945) | `FunctionDeclaration` | sim | `dir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497935-497945](../../../../../../../reference/runtime/host-main.cjs#L497935-L497945) | 3 | 0 | 1 | 4 | 1 | 1 |

### host:497935

Chamadas escritas diretamente neste corpo: `import_node_fs40.promises.lstat`, `isMissingPath`, `process.getuid`, `stat26.isDirectory`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `886aecdcd420dc3bd6b2879036abfc7aac883bbeab9daa0669887688b1d38d17`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
