# `jsonReplacer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/transcripts/README.md).

**Módulo:** `agent-transcript/index.js` · [README do módulo](../../../../modules/agent-transcript/index-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509701-509712](../../../../../reference/runtime/host-main.cjs#L509701-L509712) | `FunctionDeclaration` | não | `_key, value` |
| [evaluation:304076-304087](../../../../../reference/runtime/sand-eval-runner.cjs#L304076-L304087) | `FunctionDeclaration` | não | `_key, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509701-509712](../../../../../reference/runtime/host-main.cjs#L509701-L509712) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:304076-304087](../../../../../reference/runtime/sand-eval-runner.cjs#L304076-L304087) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:509701

Chamadas escritas diretamente neste corpo: `toHex`, `value.toString`.

SHA-256 do trecho: `068ad71bf9907878f8e0a1f2535aa01a5a5b344fb7e19fbb8f1dfd267e10217b`.

### evaluation:304076

Chamadas escritas diretamente neste corpo: `toHex3`, `value.toString`.

SHA-256 do trecho: `d32e5480808aa10da307e4db56e76ff977946978648f20588281446e35192108`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
