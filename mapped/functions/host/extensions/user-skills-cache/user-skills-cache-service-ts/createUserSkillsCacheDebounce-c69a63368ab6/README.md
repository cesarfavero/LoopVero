# `createUserSkillsCacheDebounce`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/user-skills-cache/user-skills-cache-service.ts` · [README do módulo](../../../../../../modules/host/extensions/user-skills-cache/user-skills-cache-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:784610-784615](../../../../../../../reference/runtime/host-main.cjs#L784610-L784615) | `FunctionDeclaration` | não | `delayMs = USER_SKILLS_CACHE_PUBLISH_DEBOUNCE_MS` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784610-784615](../../../../../../../reference/runtime/host-main.cjs#L784610-L784615) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:784610

Chamadas escritas diretamente neste corpo: `createDebouncePolicy`.

SHA-256 do trecho: `c0857c77aa4dedb804d767389a67d0e2828d600285bd3542ee6fb848fba2a292`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
