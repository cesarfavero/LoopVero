# `resolveAvatarPathWithinDir`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agents/agent-avatar.ts` · [README do módulo](../../../../../modules/host/agents/agent-avatar-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716773-716791](../../../../../../reference/runtime/host-main.cjs#L716773-L716791) | `FunctionDeclaration` | não | `agentDir, candidate` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716773-716791](../../../../../../reference/runtime/host-main.cjs#L716773-L716791) | 6 | 0 | 0 | 6 | 0 | 1 |

### host:716773

Chamadas escritas diretamente neste corpo: `candidate.trim`, `isPathWithin4`, `reanchorSandPath`, `reportFallbackUnlessAbsent`.

Alvos de atribuição ou incremento: `realDir`, `realFile`.

SHA-256 do trecho: `c3135df1fe5bf738105017e9d0f6ed1c50a222e7cf4a7f3538bb6437062111ac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
