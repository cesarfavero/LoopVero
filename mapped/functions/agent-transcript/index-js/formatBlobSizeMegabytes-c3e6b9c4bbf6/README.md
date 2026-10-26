# `formatBlobSizeMegabytes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/transcripts/README.md).

**Módulo:** `agent-transcript/index.js` · [README do módulo](../../../../modules/agent-transcript/index-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509727-509729](../../../../../reference/runtime/host-main.cjs#L509727-L509729) | `FunctionDeclaration` | não | `bytes` |
| [evaluation:304102-304104](../../../../../reference/runtime/sand-eval-runner.cjs#L304102-L304104) | `FunctionDeclaration` | não | `bytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509727-509729](../../../../../reference/runtime/host-main.cjs#L509727-L509729) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304102-304104](../../../../../reference/runtime/sand-eval-runner.cjs#L304102-L304104) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509727

Chamadas escritas diretamente neste corpo: `.toFixed`.

SHA-256 do trecho: `962ebad43de2b8ab96f2ca323188521499402fac34bf61603ed57f5663afdaa3`.

### evaluation:304102

Chamadas escritas diretamente neste corpo: `.toFixed`.

SHA-256 do trecho: `962ebad43de2b8ab96f2ca323188521499402fac34bf61603ed57f5663afdaa3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
