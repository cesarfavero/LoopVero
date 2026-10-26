# `createUserSkillsCacheService`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/user-skills-cache/user-skills-cache-service.ts` · [README do módulo](../../../../../../modules/host/extensions/user-skills-cache/user-skills-cache-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:784627-784701](../../../../../../../reference/runtime/host-main.cjs#L784627-L784701) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784627-784701](../../../../../../../reference/runtime/host-main.cjs#L784627-L784701) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:784627

Chamadas escritas diretamente neste corpo: `createDebouncePolicy`, `createSingleFlight`, `deps.debounce.wrap`, `new AbortController`, `new WatchedDirectory`, `publishSoon`, `watch4.setOnChange`.

SHA-256 do trecho: `bcc258c96cd20e47dad9cc878ff7ee45ed3fc266e00ba73502f22c9c65d9bb21`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
