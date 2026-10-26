# `setupScopeKind`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/managed-setup/sand-managed-setup-client.ts` · [README do módulo](../../../../../../modules/host/extensions/managed-setup/sand-managed-setup-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684101-684108](../../../../../../../reference/runtime/host-main.cjs#L684101-L684108) | `FunctionDeclaration` | não | `kind` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684101-684108](../../../../../../../reference/runtime/host-main.cjs#L684101-L684108) | 2 | 0 | 0 | 1 | 1 | 0 |

### host:684101

Chamadas escritas diretamente neste corpo: `new SandManagedSetupClientError`.

Alvos de lançamento explícito: `SandManagedSetupClientError`.

SHA-256 do trecho: `6a0a4512f5604243b64f66ef6b943cc7f19cfb8090c79e11611a217759935256`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
