# `startManagedSetupWhenAuthenticated`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/managed-setup/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/managed-setup/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684115-684139](../../../../../../../reference/runtime/host-main.cjs#L684115-L684139) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684115-684139](../../../../../../../reference/runtime/host-main.cjs#L684115-L684139) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:684115

Chamadas escritas diretamente neste corpo: `options2.auth.peekAccessToken`, `options2.auth.subscribeToRenewal`, `start`.

SHA-256 do trecho: `178a63ae5f18dcb1f79f7afdb8c4ea5b41b646107f3aee59edee1b23c418e00a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
