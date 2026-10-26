# `profileServerBindingFromJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/agents/agent-files.ts` · [README do módulo](../../../../../modules/core/agents/agent-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490836-490847](../../../../../../reference/runtime/host-main.cjs#L490836-L490847) | `FunctionDeclaration` | não | `parsed2` |
| [evaluation:629051-629062](../../../../../../reference/runtime/sand-eval-runner.cjs#L629051-L629062) | `FunctionDeclaration` | não | `parsed` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490836-490847](../../../../../../reference/runtime/host-main.cjs#L490836-L490847) | 5 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:629051-629062](../../../../../../reference/runtime/sand-eval-runner.cjs#L629051-L629062) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:490836

Chamadas escritas diretamente neste corpo: `isSandAgentOrigin`, `isSandAgentPurpose`, `profileHarnessFromJson`, `profileRoleFromJson`, `profileServerIdFromJson`.

SHA-256 do trecho: `94404e62b30cde785334fc91618789bfbdfa6e73dd35b079f6897db753e44e24`.

### evaluation:629051

Chamadas escritas diretamente neste corpo: `isSandAgentOrigin`, `isSandAgentPurpose`, `profileHarnessFromJson`, `profileRoleFromJson`, `profileServerIdFromJson`.

SHA-256 do trecho: `dcd11359aef048b7b4119a2fa59ce51cc00bfd032da2a88400f83ee3005e0079`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
