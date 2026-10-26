# `normalizeCloudAgentSecretNames`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-secret-forward.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-secret-forward-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:510035-510039](../../../../../../reference/runtime/host-main.cjs#L510035-L510039) | `FunctionDeclaration` | não | `names3` |
| [evaluation:567127-567131](../../../../../../reference/runtime/sand-eval-runner.cjs#L567127-L567131) | `FunctionDeclaration` | não | `names3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:510035-510039](../../../../../../reference/runtime/host-main.cjs#L510035-L510039) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:567127-567131](../../../../../../reference/runtime/sand-eval-runner.cjs#L567127-L567131) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:510035

Chamadas escritas diretamente neste corpo: `.filter`, `names3.map`, `new Set`, `unique.sort`.

SHA-256 do trecho: `a8f8677d37cabfd51b8f1f37d87e1d6ea1a49de888e7d8361f99704736b4f731`.

### evaluation:567127

Chamadas escritas diretamente neste corpo: `.filter`, `names3.map`, `new Set`, `unique.sort`.

SHA-256 do trecho: `a8f8677d37cabfd51b8f1f37d87e1d6ea1a49de888e7d8361f99704736b4f731`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
