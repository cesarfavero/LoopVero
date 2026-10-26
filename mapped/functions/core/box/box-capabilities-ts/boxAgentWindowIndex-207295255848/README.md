# `boxAgentWindowIndex`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-capabilities.ts` · [README do módulo](../../../../../modules/core/box/box-capabilities-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:546674-546676](../../../../../../reference/runtime/host-main.cjs#L546674-L546676) | `FunctionDeclaration` | não | `box, agentId` |
| [evaluation:475778-475780](../../../../../../reference/runtime/sand-eval-runner.cjs#L475778-L475780) | `FunctionDeclaration` | não | `box, agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546674-546676](../../../../../../reference/runtime/host-main.cjs#L546674-L546676) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475778-475780](../../../../../../reference/runtime/sand-eval-runner.cjs#L475778-L475780) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:546674

Chamadas escritas diretamente neste corpo: `box.getAgentWindowIndex`.

SHA-256 do trecho: `aaeebad73608c88aeab5a87cdaedfb9c9261669fa5fbdb2ac7d278be16ee732a`.

### evaluation:475778

Chamadas escritas diretamente neste corpo: `box.getAgentWindowIndex`.

SHA-256 do trecho: `aaeebad73608c88aeab5a87cdaedfb9c9261669fa5fbdb2ac7d278be16ee732a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
