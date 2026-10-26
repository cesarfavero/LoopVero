# `readAvatarWithinDir`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agents/agent-avatar.ts` · [README do módulo](../../../../../modules/host/agents/agent-avatar-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716832-716863](../../../../../../reference/runtime/host-main.cjs#L716832-L716863) | `FunctionDeclaration` | sim | `agentDir, candidate` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716832-716863](../../../../../../reference/runtime/host-main.cjs#L716832-L716863) | 5 | 0 | 2 | 5 | 0 | 1 |

### host:716832

Chamadas escritas diretamente neste corpo: `.next`, `avatarDataUrlCache.delete`, `avatarDataUrlCache.get`, `avatarDataUrlCache.keys`, `avatarDataUrlCache.set`, `avatarVersionForBytes`, `bytes.toString`, `reportFallbackUnlessAbsent`, `resolveAndStatAvatar`, `sniffAvatarMimeType`.

Alvos de atribuição ou incremento: `bytes`.

SHA-256 do trecho: `7abc87f31bdc6c9ca6701383633aceae54da9a4cf95b90f65e9314fc02a25705`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
