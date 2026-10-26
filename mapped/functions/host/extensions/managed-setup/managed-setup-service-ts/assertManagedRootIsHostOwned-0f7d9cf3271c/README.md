# `assertManagedRootIsHostOwned`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/managed-setup/managed-setup-service.ts` · [README do módulo](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683709-683717](../../../../../../../reference/runtime/host-main.cjs#L683709-L683717) | `FunctionDeclaration` | sim | `managedRoot` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683709-683717](../../../../../../../reference/runtime/host-main.cjs#L683709-L683717) | 1 | 0 | 1 | 0 | 1 | 0 |

### host:683709

Chamadas escritas diretamente neste corpo: `info2.isDirectory`, `new SandManagedSetupError`, `process.getuid`.

Alvos de lançamento explícito: `SandManagedSetupError`.

SHA-256 do trecho: `3232ec7c1d9e412d348b0a3ac5c583dba1142f7baf7a31e7c84e107f81f21ab1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
