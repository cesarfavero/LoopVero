# `readMachineId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-secret-store.ts` · [README do módulo](../../../../modules/host/host-secret-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:454102-454131](../../../../../reference/runtime/host-main.cjs#L454102-L454131) | `FunctionDeclaration` | sim | `path33, noFollowRoot, onRefused, io2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454102-454131](../../../../../reference/runtime/host-main.cjs#L454102-L454131) | 5 | 0 | 7 | 4 | 0 | 2 |

### host:454102

Chamadas escritas diretamente neste corpo: `JSON.parse`, `file2.chmod`, `file2.close`, `file2.readFile`, `file2.stat`, `hostSecretsSchema.safeParse`, `import_node_fs9.promises.readlink`, `io2.open`, `new UntrustedSandDataFileError`, `onRefused`, `reportFallback`, `reportFallbackUnlessAbsent`, `untrustedFileReason`.

Alvos de atribuição ou incremento: `file2`.

SHA-256 do trecho: `8336afbe5f4863095d01f7745882c7c74deb51b6e296880e0e101c0bee60e415`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
