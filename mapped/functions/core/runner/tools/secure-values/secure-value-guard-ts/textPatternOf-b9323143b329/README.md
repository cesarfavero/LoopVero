# `textPatternOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/secure-value-guard.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/secure-value-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767604-767606](../../../../../../../../reference/runtime/host-main.cjs#L767604-L767606) | `FunctionDeclaration` | não | `entry` |
| [evaluation:563121-563123](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563121-L563123) | `FunctionDeclaration` | não | `entry` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767604-767606](../../../../../../../../reference/runtime/host-main.cjs#L767604-L767606) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563121-563123](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563121-L563123) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:767604

Chamadas escritas diretamente neste corpo: `escapeRegExp6`, `patternOf`.

SHA-256 do trecho: `6a84e94d9b3e77308621f5b6832128bec4a9daec8b050bd38420edc286856a67`.

### evaluation:563121

Chamadas escritas diretamente neste corpo: `escapeRegExp5`, `patternOf`.

SHA-256 do trecho: `9e2f06bd8db14dba9c9a60f49a573f8ec11fab29c5682f46ebab61a45725a149`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
