# `createCredentialTurnTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-credential-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:752025-752062](../../../../../../../reference/runtime/host-main.cjs#L752025-L752062) | `FunctionDeclaration` | não | `host` |
| [evaluation:525091-525128](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525091-L525128) | `FunctionDeclaration` | não | `host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752025-752062](../../../../../../../reference/runtime/host-main.cjs#L752025-L752062) | 7 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:525091-525128](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525091-L525128) | 7 | 0 | 0 | 2 | 0 | 0 |

### host:752025

Chamadas escritas diretamente neste corpo: `brokeredLoginRoute`, `buildsOnePasswordConnectTools`, `createBrokeredCredentialTools`, `createCredentialProviderStatusTool`, `createCredentialTools`, `createOnePasswordConnectTools`, `loginFormGuidanceFor`, `savedLoginLister`.

SHA-256 do trecho: `fd24ec19f4e72df38f994fdbb8fee33ea2743b137941eec34fa23e6516ccf091`.

### evaluation:525091

Chamadas escritas diretamente neste corpo: `brokeredLoginRoute`, `buildsOnePasswordConnectTools`, `createBrokeredCredentialTools`, `createCredentialProviderStatusTool`, `createCredentialTools`, `createOnePasswordConnectTools`, `loginFormGuidanceFor`, `savedLoginLister`.

SHA-256 do trecho: `fd24ec19f4e72df38f994fdbb8fee33ea2743b137941eec34fa23e6516ccf091`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
