# `refuseUntrustedFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:454052-454055](../../../../../reference/runtime/host-main.cjs#L454052-L454055) | `FunctionDeclaration` | não | `file2, path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454052-454055](../../../../../reference/runtime/host-main.cjs#L454052-L454055) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:454052

Chamadas escritas diretamente neste corpo: `new UntrustedSandDataFileError`, `untrustedFileReason`.

Alvos de lançamento explícito: `UntrustedSandDataFileError`.

SHA-256 do trecho: `23d923cc5d5560126d06a665e29799148372650643f62fb89d95dd7822a3e88a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
